import { Type, plainToClass } from "class-transformer";
import "reflect-metadata";

let photoJson = `
{
  "id": 11,
  "filename": "dirty_dog.jpg",
  "depth": 2261
}
`;

class Photo {
  id!: number;
  filename!: string;
  depth!: number;
}

let photo = plainToClass(Photo, JSON.parse(photoJson));
console.log(photo);

let albumJson = `
{
  "id": 1,
  "name": "foo",
  "photos": [
    {
      "id": 9,
      "filename": "cool_wale.jpg",
      "depth": 1245
    },
    {
      "id": 10,
      "filename": "hot_bird.jpg",
      "depth": 6123
    }
  ]
}
`;

class Album {
  id!: number;
  name!: string;
  @Type(() => Photo)
  photos!: Photo[];
}

let album = plainToClass(Album, JSON.parse(albumJson));
console.log(album);
