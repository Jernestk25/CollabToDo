import { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import type { Task } from "../types/Task";

const tasksRef = collection(db, "tasks");

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const unsub = onSnapshot(tasksRef, (snapshot) => {
      setTasks(snapshot.docs.map((d) => ({ ...d.data(), id: d.id })) as Task[]);
    });
    return unsub;
  }, []);

  const addTask = (title: string) => addDoc(tasksRef, { title, completed: false });
  const toggleTask = (id: string, completed: boolean) =>
    updateDoc(doc(db, "tasks", id), { completed });
  const deleteTask = (id: string) => deleteDoc(doc(db, "tasks", id));

  return { tasks, addTask, toggleTask, deleteTask };
}
