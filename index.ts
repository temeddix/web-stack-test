import { Exposed, plainToInstance } from "class-transform";

let photoJson = `
{
  "id": 11,
  "filename": "dirty_dog.jpg",
  "depth": 2261
}
`;

class Photo {
  id = Exposed.number();
  filename = Exposed.string();
  depth = Exposed.number();
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
  table = Exposed.number();
  contents = Exposed.number();
}

class Album {
  id = Exposed.number();
  name = Exposed.string();
  photos = Exposed.structs(Photo);
  pages = Exposed.struct(Pages);
}

let album = plainToInstance(Album, JSON.parse(albumJson));
console.log(album);
