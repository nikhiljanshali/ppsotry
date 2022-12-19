import { required, alpha } from "@rxweb/reactive-form-validators"
import { AbstractControl } from "@angular/forms";

export class AcadamicFormValid {

  @required()
  @alpha()
  university?: string;

  @alpha()
  uLink?: string;

  @required()
  @alpha()
  college?: string;

  @alpha()
  cLink?: string;

  @alpha()
  educationType?: string;

  @alpha()
  subject?: string;

  @required()
  @alpha()
  startMonth?: string;

  @required()
  startYear?: number;

  @required()
  @alpha()
  endMonth?: string;

  @required()
  endYear?: number;

  @required()
  percentage?: number;
}


// import { required, error, prop } from "@rxweb/reactive-form-validators"
// import { AbstractControl } from "@angular/forms"
// export class FormField {

//   @prop()
//   action: string;

//   @error({ conditionalExpression: function (control: AbstractControl) { return this.action === "submit" } })
//   @required()
//   firstName: string;

//   @error({ conditionalExpression: function (control: AbstractControl) { return this.action == "submit" } })
//   @required()
//   userName: string;

// }
