import { useEffect, useState } from "react";
import useGetRequest from "./useGetRequest";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const { get, loadingState } = useGetRequest(`/listOfUsers/JUDGE`); //${userRole}

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await get();
      setUsers(users);
    };
    fetchUsers();
  }, [get]);

  return { users, setUsers, loadingState };
};

const useUsersLawyers = () => {
  const [lawyers, setUsersLawyers] = useState([]);
  const { get, loadingStateLawyers } = useGetRequest(`/listOfUsers/LAWYER`); //${userRole}

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await get();
      setUsersLawyers(users);
    };
    fetchUsers();
  }, [get]);

  return { lawyers, setUsersLawyers, loadingStateLawyers };
};

const useUsersClients = () => {
  const [clients, setUsersClients] = useState([]);
  const { get, loadingStateClients } = useGetRequest(`/listOfUsers/CLIENT`); //${userRole}

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await get();
      setUsersClients(users);
    };
    fetchUsers();
  }, [get]);

  return { clients, setUsersClients, loadingStateClients };
};

export {
  useUsers,
  useUsersLawyers,
  useUsersClients
}