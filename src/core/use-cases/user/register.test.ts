import { register, OutsideRegister } from "./register";
import { CreateUser } from "@/core/types/user";
import * as TE from "fp-ts/TaskEither";
import { pipe } from "fp-ts/function";

const registerOK: OutsideRegister<string> = async (data) => {
  return `Usuário ${data.username} cadastrado com sucesso`;
};

const data: CreateUser = {
  username: "jhon",
  email: "jhon@doe.com",
  password: "jhon123",
};

it("Deveria cadastrar um usuário com sucesso", async () => {
  return pipe(
    data,
    register(registerOK),
    TE.map((result) =>
      expect(result).toBe(`Usuário ${data.username} cadastrado com sucesso`)
    )
  );
});
