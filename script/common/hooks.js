import { WHFortyRPActor } from "./actor.js";
import { WHFortyRPItem } from "./item.js";
import { AcolyteSheet } from "../sheet/actor/acolyte.js";
import { NpcSheet } from "../sheet/actor/npc.js";
import { WeaponSheet } from "../sheet/weapon.js";
import { AmmunitionSheet } from "../sheet/ammunition.js";
import { WeaponModificationSheet } from "../sheet/weapon-modification.js";
import { ArmourSheet } from "../sheet/armour.js";
import { ForceFieldSheet } from "../sheet/force-field.js";
import { CyberneticSheet } from "../sheet/cybernetic.js";
import { DrugSheet } from "../sheet/drug.js";
import { GearSheet } from "../sheet/gear.js";
import { ToolSheet } from "../sheet/tool.js";
import { CriticalInjurySheet } from "../sheet/critical-injury.js";
import { MalignancySheet } from "../sheet/malignancy.js";
import { MentalDisorderSheet } from "../sheet/mental-disorder.js";
import { MutationSheet } from "../sheet/mutation.js";
import { PsychicPowerSheet } from "../sheet/psychic-power.js";
import { TalentSheet } from "../sheet/talent.js";
import { SpecialAbilitySheet } from "../sheet/special-ability.js";
import { TraitSheet } from "../sheet/trait.js";
import { AptitudeSheet } from "../sheet/aptitude.js";
import { initializeHandlebars } from "./handlebars.js";
import { migrateWorld } from "./migration.js";
import { prepareCommonRoll, prepareCombatRoll, preparePsychicPowerRoll } from "./dialog.js";
import { commonRoll, combatRoll } from "./roll.js";
import DhMacroUtil from "./macro.js";

// Import Helpers
import * as chat from "./chat.js";

Hooks.once("init", () => {
  CONFIG.Combat.initiative = { formula: "@initiative.base + @initiative.bonus", decimals: 0 };
  CONFIG.Actor.documentClass = WHFortyRPActor;
  CONFIG.Item.documentClass = WHFortyRPItem;
  CONFIG.fontDefinitions["Caslon Antique"] = {editor: true, fonts: []};
  game.whFortyRp = {
    testInit: {
      prepareCommonRoll,
      prepareCombatRoll,
      preparePsychicPowerRoll,
    },
    tests:{
      commonRoll,
      combatRoll
    }
  };
  game.macro = DhMacroUtil; 
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("whfortyrp", AcolyteSheet, { types: ["acolyte"], makeDefault: true });
  Actors.registerSheet("whfortyrp", NpcSheet, { types: ["npc"], makeDefault: true });
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("whfortyrp", WeaponSheet, { types: ["weapon"], makeDefault: true });
  Items.registerSheet("whfortyrp", AmmunitionSheet, { types: ["ammunition"], makeDefault: true });
  Items.registerSheet("whfortyrp", WeaponModificationSheet, { types: ["weaponModification"], makeDefault: true });
  Items.registerSheet("whfortyrp", ArmourSheet, { types: ["armour"], makeDefault: true });
  Items.registerSheet("whfortyrp", ForceFieldSheet, { types: ["forceField"], makeDefault: true });
  Items.registerSheet("whfortyrp", CyberneticSheet, { types: ["cybernetic"], makeDefault: true });
  Items.registerSheet("whfortyrp", DrugSheet, { types: ["drug"], makeDefault: true });
  Items.registerSheet("whfortyrp", GearSheet, { types: ["gear"], makeDefault: true });
  Items.registerSheet("whfortyrp", ToolSheet, { types: ["tool"], makeDefault: true });
  Items.registerSheet("whfortyrp", CriticalInjurySheet, { types: ["criticalInjury"], makeDefault: true });
  Items.registerSheet("whfortyrp", MalignancySheet, { types: ["malignancy"], makeDefault: true });
  Items.registerSheet("whfortyrp", MentalDisorderSheet, { types: ["mentalDisorder"], makeDefault: true });
  Items.registerSheet("whfortyrp", MutationSheet, { types: ["mutation"], makeDefault: true });
  Items.registerSheet("whfortyrp", PsychicPowerSheet, { types: ["psychicPower"], makeDefault: true });
  Items.registerSheet("whfortyrp", TalentSheet, { types: ["talent"], makeDefault: true });
  Items.registerSheet("whfortyrp", SpecialAbilitySheet, { types: ["specialAbility"], makeDefault: true });
  Items.registerSheet("whfortyrp", TraitSheet, { types: ["trait"], makeDefault: true });
  Items.registerSheet("whfortyrp", AptitudeSheet, { types: ["aptitude"], makeDefault: true });
  initializeHandlebars();
  game.settings.register("whfortyrp", "worldSchemaVersion", {
    name: "World Version",
    hint: "Used to automatically upgrade worlds data when the system is upgraded.",
    scope: "world",
    config: true,
    default: 0,
    type: Number
  });
});

Hooks.once("ready", () => {
  migrateWorld();
  CONFIG.ChatMessage.documentClass.prototype.getRollData = function() {
      return this.getFlag("whfortyrp", "rollData") 
  }
});


/* -------------------------------------------- */
/*  Other Hooks                                 */
/* -------------------------------------------- */

Hooks.on("getChatLogEntryContext", chat.addChatMessageContextOptions);
Hooks.on("getChatLogEntryContext", chat.showRolls);
/**
 * Create a macro when dropping an entity on the hotbar
 * Item      - open roll dialog for item
 */
Hooks.on("hotbarDrop", (bar, data, slot) => {
  if (data.type == "Item" || data.type == "Actor")
  {
      DhMacroUtil.createMacro(data, slot)
      return false
  }
});