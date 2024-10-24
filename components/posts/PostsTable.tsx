"use client";

import React, { useEffect, useState } from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import posts from '@/data/posts';
import Link from 'next/link';
import { NewPost, Post } from '@/types/posts';
import axios from "axios";

  interface PostsTableProps {
    limit?: number;
    title?: string;
  }
const PostsTable = ({limit, title}: PostsTableProps) => {
const [allPosts, setAllPosts] = useState<NewPost[]>([]);

const getAllPosts =async () => {
  const response = await axios.get("/api/post");
  setAllPosts(response.data.posts);
  console.log(response.data.posts);
  
}

useEffect(()=> {
  getAllPosts();
},[])

    // Sort posts in dec order based on date
  //const sortedPosts: Post[] = [...posts].sort(
  //  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  //);

  // Filter posts to limit
  //const filteredPosts = limit ? sortedPosts.slice(0, limit) : sortedPosts;

  return (
    <div className='mt-10'>
        <h3 className='text-2xl mb-4 font-semibold'>{title? title: "Posts"}</h3>
        <Table>
            <TableCaption>A list of recent posts</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead className='hidden md:table-cell'>Author</TableHead>

                    <TableHead className='hidden md:table-cell text-right'>Date</TableHead>
                    <TableHead>View</TableHead>

                 

                </TableRow>
            </TableHeader>
            <TableBody>
                {allPosts.map((post)=>(
<TableRow key={post._id}>
    <TableCell>{post.title}</TableCell>
    <TableCell className='hidden md:table-cell'>{post.author}</TableCell>
    <TableCell className='hidden md:table-cell text-right'>{new Date(post.createdAt).toLocaleDateString()}</TableCell>
    <TableCell> <Link href={`/posts/edit/${post._id}`}><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs'>Edit</button></Link></TableCell>
</TableRow>
                ))}
            </TableBody>
        </Table>

    </div>
  )
}

export default PostsTable