import { WHFortyRPItemSheet } from "./item.js";

export class TalentSheet extends WHFortyRPItemSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["whfortyrp", "sheet", "talent"],
      template: "systems/whfortyrp/template/sheet/talent.html",
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
