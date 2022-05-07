import { Plugin, registerPlugin } from "enmity-api/plugins";
import Manifest from "./manifest.json";

const ExamplePlugin: Plugin = {
  name: Manifest.name,
  // @ts-ignore
  description: Manifest.description,
  authors: Manifest.authors,
  version: Manifest.version,
  color: Manifest.color,
  commands: [],
  patches: [],

  onStart() {

  },

  onStop() {

  }
}

registerPlugin(ExamplePlugin);