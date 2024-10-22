"use client";

import { addNewUserAction } from "@/actions";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addNewUserFormControls, addNewUserInitialState } from "@/utils";
import { useState } from "react";

function AddNewUser() {
  const [openDialogBox, setOpenDialogBox] = useState(false);
  const [addNewUserFormData, setAddNewUserFormData] = useState(addNewUserInitialState);

  console.log('Current Form Data:', addNewUserFormData);

  function handleSaveNewUserValid() {
    return Object.keys(addNewUserFormData).every((key) => addNewUserFormData[key].trim() !== "");
  }

  async function handleSaveNewUserAction(e) {
    e.preventDefault(); // Prevent default form submission
    console.log('Submitting Form Data:', JSON.stringify(addNewUserFormData)); // Log the plain object form data

    const result = await addNewUserAction(addNewUserFormData,'/user-manage');
    console.log('Result from Action:', result); // Log the result from action
    setAddNewUserFormData(addNewUserInitialState); // Reset form data
    setOpenDialogBox(false); // Close the dialog
}


  return (
    <div>
      <Button onClick={() => setOpenDialogBox(true)}>Add User</Button>
      <Dialog open={openDialogBox} onOpenChange={() => {
        setOpenDialogBox(false);
        setAddNewUserFormData(addNewUserInitialState);
      }}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New User</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSaveNewUserAction} className="grid gap-4 py-4">
            <div>
              {addNewUserFormControls.map((controlItem) => (
                <div className="mb-6" key={controlItem.name}>
                  <Label htmlFor={controlItem.name} className="text-right">
                    {controlItem.label}
                  </Label>
                  <Input
                    id={controlItem.name}
                    name={controlItem.name}
                    placeholder={controlItem.placeholder}
                    className="col-span-3"
                    type={controlItem.type}
                    value={addNewUserFormData[controlItem.name]}
                    onChange={(e) => setAddNewUserFormData({ ...addNewUserFormData, [controlItem.name]: e.target.value })}
                  />
                </div>
              ))}
            </div>
            <DialogFooter>
              <Button disabled={!handleSaveNewUserValid()} type="submit">Save</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewUser;
