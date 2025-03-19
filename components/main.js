/* eslint-disable prettier/prettier */
import html from "html-literal";
import * as views from "../views";

views["home"]();
export default () => html`
  ${views["home"]()} 
  ${views["aboutMe"]()} 
  ${views["pizza"]()}
  ${views["order"]()}
`;

