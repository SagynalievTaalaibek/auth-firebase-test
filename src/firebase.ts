import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

const firebaseConfig: FirebaseConfig = {
  apiKey: 'AIzaSyCVwdXrnu8H7rzv80BBvJ_S6FTI8hY9HKc',
  authDomain: 'projects-with-auth.firebaseapp.com',
  projectId: 'projects-with-auth',
  storageBucket: 'projects-with-auth.appspot.com',
  messagingSenderId: '433208620941',
  appId: '1:433208620941:web:048ea651edb46563706fc4',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Пример выполнения операции входа
const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('User logged in:', userCredential.user);
  } catch (error) {
    console.error('Login error:', error);
  }
};

export { app, auth, signIn }; // Экспортируйте нужные вам модули для использования в других файлах
