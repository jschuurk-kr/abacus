export function fieldNameFromPath(path: string): string {
  let result = "";
  const bits = path.split(".");
  // flatten path at depth 4: data.political_group_votes[1].candidate_votes[1].votes
  if (bits.length === 4) {
    const [, , subsection, field] = bits;
    // replace [1] with -1
    const b = subsection?.replace(/\[(\d+)\]/, "-$1");
    return `${b}.${field}`;
  } else {
    result = bits[bits.length - 1] || "";
  }
  return result || path;
}

/**
 *
 * @param fields Fields in Validation result data.<formsection>.<field>
 * @param formSections keys in response data to match
 * @returns true if fields match formSections
 */
export function matchValidationResultWithFormSections(
  fields: string[],
  formSections: string[],
): boolean {
  for (let i = 0; i < fields.length; i++) {
    const field = fields[i];
    if (field) {
      const bits = field.split(".");
      let result = false;
      for (let j = 0; j < formSections.length; j++) {
        const section = formSections[j];
        if (section) {
          if (bits.includes(section)) {
            result = true;
            break;
          }
        }
      }
      if (!result) {
        return false;
      }
    }
  }
  return true;
}
