import { WHFortyRPItemSheet } from "./item.js";

export class TraitSheet extends WHFortyRPItemSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["whfortyrp", "sheet", "trait"],
      template: "systems/whfortyrp/template/sheet/trait.html",
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
