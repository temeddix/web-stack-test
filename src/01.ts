import { Exposed, plainToInstance, plainsToInstances } from "class-transform";

const photoPlain = {
  id: 11,
  filename: "dirty_dog.jpg",
  depth: 2261,
};
const photoJson = JSON.stringify(photoPlain);

class Photo {
  id = Exposed.number();
  filename = Exposed.string();
  depth = Exposed.number();
}

const photo = plainToInstance(Photo, JSON.parse(photoJson));
console.log(photo);

const albumsPlain = [
  {
    id: 1,
    name: "foo",
    photos: [
      {
        id: 9,
        filename: "cool_whale.jpg",
        depth: 1245,
      },
      {
        id: 10,
        filename: "hot_bird.jpg",
        depth: 6123,
      },
    ],
    pages: {
      table: 6,
      contents: 72,
    },
  },
  {
    id: 2,
    name: "bar",
    photos: [
      {
        id: 11,
        filename: "awesome_dog.jpg",
        depth: 500,
      },
      {
        id: 12,
        filename: "cute_cat.jpg",
        depth: 300,
      },
      {
        id: 15,
        filename: "quiet_beach.jpg",
        depth: 300,
      },
    ],
    pages: {
      table: 4,
      contents: 55,
    },
  },
  {
    id: 3,
    name: "baz",
    photos: [
      {
        id: 13,
        filename: "sunny_beach.jpg",
        depth: 2000,
      },
      {
        id: 14,
        filename: "mountain_view.jpg",
        depth: 4000,
      },
    ],
    pages: {
      table: 8,
      contents: 90,
    },
  },
];
const albumsJson = JSON.stringify(albumsPlain);

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

const albums = plainsToInstances(Album, JSON.parse(albumsJson));
console.log(albums);
