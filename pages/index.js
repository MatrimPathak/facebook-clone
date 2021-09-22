import { getSession } from 'next-auth/client';
import Head from 'next/head'
import { useEffect, useState } from 'react';
import Feed from "../components/Feed";
import Header from '../components/Header'
import Login from '../components/Login';
import Sidebar from '../components/Sidebar';
import Widgets from '../components/Widgets';
import { db, query, orderBy, collection, onSnapshot } from "../firebase"

export default function Home({ session, posts }) {
  if (!session) return <Login />
  return (
    <div>
      <Head>
        <title>Facebook</title>
      </Head>

      <Header />

      <main className="flex bg-gray-100">
        <Sidebar />
        <Feed posts={posts} />
        <Widgets />
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const posts = []
  onSnapshot(query(collection(db, "posts"), orderBy("timestamp", "desc")), (querySnapshot) => {
    posts = querySnapshot?.docs.map((doc => ({ ...doc.data(), id: doc.id, timestamp: null })))
  })

  return {
    props: {
      session,
      posts: posts,
    }
  }
}