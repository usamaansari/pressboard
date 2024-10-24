

import { NextResponse } from "next/server";

import { connectToDB } from "@/data/utils";
import { User } from "@/data/models/user";
import bcrypt from "bcrypt";

const LoadDB = async () => {
  await connectToDB();
};

LoadDB();

export async function GET(request, response) {
  //ConnectDB();
  const users = await User.find({});
  return NextResponse.json({ users });
}

export async function POST(request) {
  const { fullname, email, password, phone, address, isAdmin, isActive, img } =
    await request.json();

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({
    fullname,
    email,
    password: hashedPassword,
    phone,
    address,
    isAdmin,
    isActive,
    img,
  });

  await newUser.save();
  return NextResponse.json({ msg: "User Created" });
}

export async function DELETE(request, response) {
  //ConnectDB();
  const id = request.nextUrl.searchParams.get("id");

  await User.findByIdAndDelete(id);
  return NextResponse.json({ msg: "Deleted successfully" });
}

/*
export async function PUT (request, response) {
    //ConnectDB();
    const id = request.nextUrl.searchParams.get("id");

     await User.findByIdAndUpdate({_id:id}, [{
        $set:{
            isComplete: {$eq:[false,"$isComplete"]}
        }
     }]);
return NextResponse.json({msg: "Todo Updated"})
}
*/
