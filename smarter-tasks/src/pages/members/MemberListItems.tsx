/* eslint-disable @typescript-eslint/no-explicit-any */

// First, I'll import the useProjectsState custom hook to access projects state.
import { deleteMember } from "../../context/members/actions";
import { useMembersDispatch, useMembersState } from "../../context/members/context";
export default function MemberListItems() {
  // I'll define a new constant called `state`, to call the useProjectsState() hook,
  // and get access to projects state.
  const state: any = useMembersState();

  // Next, I'll destructure the state object to gain access to projects,
  // isLoading, isError and errorMessage property.
  const { members, isLoading, isError, errorMessage } = state;
  const dispatchMembers = useMembersDispatch()
  console.log(members);

  // If `isLoading` is true, and there are no projects, in that case,
  // I'll show a loading text
  if (members.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }

  // Next, if there is an error, I'll show the error message.
  if (isError) {
    return <span>{errorMessage}</span>;
  }

  const handleDelete = (id :number)=>{
    console.log("Delete Cliked")
    deleteMember(dispatchMembers,id)
  }

  // And finally I'll iterate over the projects object to show the
  // individual projects card.
  return (
    <>
      {members.map((member: any) => (
        <div key={member.id} className="member p-2 flex justify-between bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
          <div key={member.id}>
            <h5 className="mt-2 text-xl font-medium tracking-tight text-black ">
              {member.name}
            </h5>
            <h6 className="mb-2  tracking-tight  text-black">{member.email}</h6>
          </div>
          <button onClick={()=>{handleDelete(member.id)}} className="bg-red-500   m-2 rounded-sm shadow text-white p-2"><i className='bx bxs-trash-alt'></i></button>
        </div>
      ))}
    </>
  );
}
