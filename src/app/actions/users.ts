"use server";

import { prisma } from "../../lib/prisma";
import { revalidatePath } from "next/cache";

interface DadosUsuario {
  name: string;
  email: string;
  birthDate: string;
  phone: string;
  nickname: string;
}

export async function salvarUsuarioNoBanco(dados: DadosUsuario) {
  try {
    await prisma.user.create({
      data: {
        name: dados.name,
        email: dados.email,
        birthDate: new Date(dados.birthDate),
        phone: dados.phone || null,
        nickname: dados.nickname || null,
      },
    });

    revalidatePath("/");

    return { sucesso: true };
  } catch (error) {
    console.error("Erro ao salvar no banco:", error);
    return {
      sucesso: false,
      erro: "Não foi possível salvar o usuário. Verifique se o e-mail já existe.",
    };
  }
}
