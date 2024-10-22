import { fetchUsersAction } from "@/actions";
import AddNewUser from "@/components/add-new-user";
import SingleUser from "@/components/single-user";

async function UserManage() {

  const getListofUsers = await fetchUsersAction();
  console.log(getListofUsers);

  return (
    <div className="p-20 max-w-6xl">
      <div className="flex justify-between">
        <h1>User Management</h1>
        <AddNewUser/>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-5">
        {
          getListofUsers && getListofUsers.data && getListofUsers.data.length > 0 ?
          getListofUsers.data.map((userItem) => <SingleUser user={userItem}/>)
          : <h3>No users</h3>
        }

      </div>
    </div>
  );
}

export default UserManage;
