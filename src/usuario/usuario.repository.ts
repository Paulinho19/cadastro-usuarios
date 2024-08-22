import { PrismaService } from './../db/prisma.service';
import { Injectable } from '@nestjs/common';
import Usuario from './usuario.entity';

@Injectable()
export class UsuarioRepository {
  constructor(private prismaService: PrismaService) {}

  async obterTodos() {
    return this.prismaService.usuario.findMany();
  }

  async obterPorId(id: string) {
    return this.prismaService.usuario.findUnique({
      where: { id },
    });
  }

  async criar(usuario: Usuario) {
    return this.prismaService.usuario.create({
      data: usuario as any,
    });
  }

  async atualizar(usuario: Usuario) {
    if (!usuario.id) throw new Error('Usuário sem ID');

    return this.prismaService.usuario.update({
      where: { id: usuario.id },
      data: usuario as any,
    });
  }

  async deletar(id: string) {
    return this.prismaService.usuario.delete({
      where: { id },
    });
  }
}
