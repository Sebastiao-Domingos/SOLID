import { LoginPorps, LoginResultProps } from "@/types/login";
import axios from "axios";
export class UserSession {
  private readonly url = "/login";

  async login(data: LoginPorps): Promise<LoginResultProps | undefined> {
    try {
      console.log("service : ", data);

      return {
        status: 200,
        message: "success",
      };
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(`Status : ${error.response.status} - ${error.message}`);
      }
    }
  }
}
