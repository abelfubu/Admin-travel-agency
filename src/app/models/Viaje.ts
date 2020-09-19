export class Viaje {
  id: number;
  color: string;
  destino: string;
  duracion: number;
  estado: number;
  img: string;
  nombre: string;
  plazas: number;
  rating: number;
  tipo: string;

  constructor(item?: any) {
    this.id = item.id;
    this.color = item?.color || '#000';
    this.destino = item.destino;
    this.duracion = item.duracion || 0;
    this.estado = item?.estado || 1;
    this.img = item.img;
    this.nombre = item.nombre;
    this.plazas = item?.plazas || 50;
    this.rating = item?.rating || 0;
    this.tipo = item?.tipo || 'Tour';
  }
}
