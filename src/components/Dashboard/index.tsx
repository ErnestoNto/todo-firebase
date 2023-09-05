"use client";
import React from "react";
import * as S from "./styles";
import {FiEdit2, FiTrash} from 'react-icons/fi'

import {doc, addDoc, getDocs, query, collection, where, deleteDoc, updateDoc, onSnapshot} from 'firebase/firestore'
import { db } from "@/services/firebase_conection";
import { useAuth } from "@/contexts/auth";

type TaskProps = {
  task: string
  id: string
}

const Dashboard = () => {
  const [tasks, setTasks] = React.useState<TaskProps[]>([])
  const [input, setInput] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  const [loadingTasks, setLoadingTasks] = React.useState(false)

  const [itemToEdit, setItemToEdit] = React.useState<string | null>(null)

  const auth = useAuth()

  const uid = auth && auth.user.uid

  React.useEffect(() => {
    const loadTasks = async () => {
      setLoadingTasks(true)

      const collectionRef = collection(db, 'tasks')
      const q = query(collectionRef, where('userUid', '==', uid))

      await onSnapshot(q, (snapshot) => {
        let data: TaskProps[] = []

        snapshot.forEach(item => {

          return data.push({
            task: item.data().task,
            id: item.id
          });
        })

        setTasks(data)

        setLoadingTasks(false)
      })

    }

    loadTasks()
  }, [uid])

  const handleSaveTask = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)


    if(itemToEdit){
      const docRef = doc(db, 'tasks', itemToEdit)
      await updateDoc(docRef, {
        task: input
      })
      .then(() => {
        setInput('')
        setItemToEdit(null)
        setLoading(false)
      })

      return 
    }


    const collectionRef = collection(db, 'tasks')
    await addDoc(collectionRef, {
      task: input,
      userUid: auth?.user.uid
    })
    .then(() => {
      setInput('')
      setLoading(false)
    })
  }

  const handleDeleteTask = async (id: string) => 
  {
    const docRef = doc(db, 'tasks', id)
    
    await deleteDoc(docRef)
  }

  const toEditing = (data: TaskProps) => {
    setInput(data.task)
    setItemToEdit(data.id)
  }

  return (
    <S.Container>
      <S.Form className="form" onSubmit={handleSaveTask}>
        <textarea
          placeholder='Digite sua tarefa'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          type='submit'
        >{loading ? (
          <span className='loading'>
          Carregando
          </span>
        ): (
          <>
            {!!itemToEdit ? 'Atualizar' : 'Salvar'}
          </>
        )}
        </button>
      </S.Form>
      <S.Tasks>

        {loadingTasks ? (
          <p className='loading'>Carregando</p>
        ) : tasks.length === 0 ? (
          <p>Nenhuma tarefa por aqui :( </p>
        ) : (
          tasks.map((item, index) => (
            <p key={index}>
            <span>{item.task}</span>
            
            <span className="controls">
              <button onClick={() => toEditing(item)}>
                <FiEdit2 />
              </button>
              <button onClick={() => handleDeleteTask(item.id)}>
                <FiTrash />
              </button>
            </span>
          </p>
          ))
        )}

      </S.Tasks>
    </S.Container>
  );
};

export default Dashboard;


