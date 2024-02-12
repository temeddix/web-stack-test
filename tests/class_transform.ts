import { nested, plainToInstance } from "class-transform";
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

let photo = plainToInstance(Photo, JSON.parse(photoJson));
console.log(photo);

let albumJson = `
{
  "id": 1,
  "name": "foo",
  "photos": [
    {
      "id": 9,
      "filename": "cool_whale.jpg",
      "depth": 1245
    },
    {
      "id": 10,
      "filename": "hot_bird.jpg",
      "depth": 6123
    }
  ],
  "pages": {
    "table": 6,
    "contents": 72
  }
}
`;

class Pages {
  table!: number;
  contents!: number;
}

class Album {
  id!: number;
  name!: string;
  @nested(Photo) photos!: Array<Photo>;
  @nested(Pages) pages!: Pages;
}

let album = plainToInstance(Album, JSON.parse(albumJson));
console.log(album);
