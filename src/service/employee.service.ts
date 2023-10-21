import BaseService from "./base.service";
import { APIENDPOINTS } from "../utils/endpoints";
import { Temployee } from "../interface/employe.interface";

export const getEmployees = async () => {
  try {
    const {data} = await BaseService.get(APIENDPOINTS.EMPLOYEE.GET);
    return data;
  } catch (err) {
    throw err;
  }
};

export const createEmployee = async (payload: Temployee) => {
  try {
    const res = await BaseService.post(APIENDPOINTS.EMPLOYEE.CREATE, payload);
    return res;
  } catch (err) {
    throw err;
  }
};

export const editEmployee = async (id: string, payload: Temployee) => {
  try {
    const res = await BaseService.put(APIENDPOINTS.EMPLOYEE.EDIT(id), payload);
    return res;
  } catch (err) {
    throw err;
  }
};

export const deleteEmployee = async (id: string) => {
  try {
    const res = await BaseService.delete(APIENDPOINTS.EMPLOYEE.DELETE(id));
    return res;
  } catch (err) {
    throw err;
  }
};
