"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { deleteUserAction } from "@/actions";

async function handleDeleteUser(getCurrentUserID) {
    const res = await deleteUserAction(getCurrentUserID, '/user-manage');
    console.log(res);
}

function SingleUser({user}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{user.firstN} {user.lastN}</CardTitle>
        <CardDescription>{user.email}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{user.address}</p>
      </CardContent>
      <CardFooter className="flex justify-end items-center space-x-2">
        <Button className="bg-blue-600">Edit</Button>
        <Button className="bg-red-600" onClick={() => handleDeleteUser(user._id)}>Delete</Button>
      </CardFooter>
    </Card>
  );
}

export default SingleUser;
