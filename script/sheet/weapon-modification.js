import { WHFortyRPItemSheet } from "./item.js";

export class WeaponModificationSheet extends WHFortyRPItemSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["whfortyrp", "sheet", "weapon-modification"],
      template: "systems/whfortyrp/template/sheet/weapon-modification.html",
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
