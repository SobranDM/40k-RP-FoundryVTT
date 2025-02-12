export const initializeHandlebars = () => {
  registerHandlebarsHelpers();
  preloadHandlebarsTemplates();
};

/**
 * Define a set of template paths to pre-load. Pre-loaded templates are compiled and cached for fast access when
 * rendering. These paths will also be available as Handlebars partials by using the file name.
 * @returns {Promise}
 */
function preloadHandlebarsTemplates() {
  const templatePaths = [
    "systems/whfortyrp/template/sheet/actor/acolyte.html",
    "systems/whfortyrp/template/sheet/actor/npc.html",
    "systems/whfortyrp/template/sheet/actor/limited-sheet.html",

    "systems/whfortyrp/template/sheet/actor/tab/abilities.html",
    "systems/whfortyrp/template/sheet/actor/tab/combat.html",
    "systems/whfortyrp/template/sheet/actor/tab/gear.html",
    "systems/whfortyrp/template/sheet/actor/tab/notes.html",
    "systems/whfortyrp/template/sheet/actor/tab/npc-notes.html",
    "systems/whfortyrp/template/sheet/actor/tab/npc-stats.html",
    "systems/whfortyrp/template/sheet/actor/tab/progression.html",
    "systems/whfortyrp/template/sheet/actor/tab/psychic-powers.html",
    "systems/whfortyrp/template/sheet/actor/tab/stats.html",

    "systems/whfortyrp/template/sheet/mental-disorder.html",
    "systems/whfortyrp/template/sheet/aptitude.html",
    "systems/whfortyrp/template/sheet/malignancy.html",
    "systems/whfortyrp/template/sheet/mutation.html",
    "systems/whfortyrp/template/sheet/talent.html",
    "systems/whfortyrp/template/sheet/trait.html",
    "systems/whfortyrp/template/sheet/special-ability.html",
    "systems/whfortyrp/template/sheet/psychic-power.html",
    "systems/whfortyrp/template/sheet/critical-injury.html",
    "systems/whfortyrp/template/sheet/weapon.html",
    "systems/whfortyrp/template/sheet/armour.html",
    "systems/whfortyrp/template/sheet/gear.html",
    "systems/whfortyrp/template/sheet/drug.html",
    "systems/whfortyrp/template/sheet/tool.html",
    "systems/whfortyrp/template/sheet/cybernetic.html",
    "systems/whfortyrp/template/sheet/weapon-modification.html",
    "systems/whfortyrp/template/sheet/ammunition.html",
    "systems/whfortyrp/template/sheet/force-field.html",
    "systems/whfortyrp/template/sheet/characteristics/information.html",
    "systems/whfortyrp/template/sheet/characteristics/left.html",
    "systems/whfortyrp/template/sheet/characteristics/name.html",
    "systems/whfortyrp/template/sheet/characteristics/right.html",
    "systems/whfortyrp/template/sheet/characteristics/total.html",
    "systems/whfortyrp/template/chat/item.html",
    "systems/whfortyrp/template/chat/roll.html",
    "systems/whfortyrp/template/chat/critical.html",
    "systems/whfortyrp/template/dialog/common-roll.html",
    "systems/whfortyrp/template/dialog/combat-roll.html",
    "systems/whfortyrp/template/dialog/psychic-power-roll.html"
  ];
  return loadTemplates(templatePaths);
}

/**
 * Add custom Handlerbars helpers.
 */
function registerHandlebarsHelpers() {
  Handlebars.registerHelper("removeMarkup", function(text) {
    const markup = /<(.*?)>/gi;
    return text.replace(markup, "");
  });

  Handlebars.registerHelper("enrich", function(string) {
    return TextEditor.enrichHTML(string, {async: false});
  });

  Handlebars.registerHelper("damageTypeLong", function(damageType) {
    damageType = (damageType || "i").toLowerCase();
    switch (damageType) {
      case "e":
        return game.i18n.localize("DAMAGE_TYPE.ENERGY");
      case "i":
        return game.i18n.localize("DAMAGE_TYPE.IMPACT");
      case "r":
        return game.i18n.localize("DAMAGE_TYPE.RENDING");
      case "x":
        return game.i18n.localize("DAMAGE_TYPE.EXPLOSIVE");
      default:
        return game.i18n.localize("DAMAGE_TYPE.IMPACT");
    }
  });


  Handlebars.registerHelper("damageTypeShort", function(damageType) {
    switch (damageType) {
      case "energy":
        return game.i18n.localize("DAMAGE_TYPE.ENERGY_SHORT");
      case "impact":
        return game.i18n.localize("DAMAGE_TYPE.IMPACT_SHORT");
      case "rending":
        return game.i18n.localize("DAMAGE_TYPE.RENDING_SHORT");
      case "explosive":
        return game.i18n.localize("DAMAGE_TYPE.EXPLOSIVE_SHORT");
      default:
        return game.i18n.localize("DAMAGE_TYPE.IMPACT_SHORT");
    }
  });

}

