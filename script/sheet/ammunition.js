import { WHFortyRPItemSheet } from "./item.js";

export class AmmunitionSheet extends WHFortyRPItemSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["whfortyrp", "sheet", "ammunition"],
      template: "systems/whfortyrp/template/sheet/ammunition.html",
      width: 500,
      height: 369,
      resizable: false,
      tabs: [
        {
          navSelector: ".sheet-tabs",
          contentSelector: ".sheet-body",
          initial: "stats"
        }
      ]
    });
  }

  _getHeaderButtons() {
    let buttons = super._getHeaderButtons();
    buttons = [].concat(buttons);
    return buttons;
  }

  activateListeners(html) {
    super.activateListeners(html);
  }
}
