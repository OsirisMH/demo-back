import { Request, Response } from "express";

export const obtenerUsuarios = async ( req: Request, res: Response ) => {
  try {
    return res.status(200).json({
      ok: true,
      msg: 'Obtener usuarios',
    })
  } catch (error: any) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'Ha ocurrido un error',
    })
  }
}