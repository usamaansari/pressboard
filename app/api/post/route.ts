

import { Post } from "@/data/models/post";
import { connectToDB } from "@/data/utils";
import { NextResponse } from "next/server";

const LoadDB = async () => {
  await connectToDB();
};

LoadDB();

export async function GET(request, response) {
  //ConnectDB();
  const posts = await Post.find({});
  return NextResponse.json({ posts });
}

export async function POST(request) {
  const { title, body, author} = await request.json();

  const newPost = new Post({
    title,
    body,
    author,
   
  });

  await newPost.save();

  return NextResponse.json({ msg: "Post Created" });
}

export async function DELETE(request, response) {
  //ConnectDB();
  const id = request.nextUrl.searchParams.get("id");

  await Post.findByIdAndDelete(id);
  return NextResponse.json({ msg: "Deleted successfully" });
}


export async function PUT(request, response) {
  const id = request.nextUrl.searchParams.get("id");
  const updatePost = await request.json()
  await Post.findByIdAndUpdate(id, 
updatePost
  )
  return NextResponse.json({ msg: "Updated successfully" });
}


/*
export async function PUT (request, response) {
    //ConnectDB();
    const id = request.nextUrl.searchParams.get("id");

     await TodoModel.findByIdAndUpdate({_id:id}, [{
        $set:{
            isComplete: {$eq:[false,"$isComplete"]}
        }
     }]);
return NextResponse.json({msg: "Todo Updated"})
}
*/
