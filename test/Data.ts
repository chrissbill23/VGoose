/**
 * @author Bile Ezanin Christian Prince Carlos
 * @version 1.0.0
 */

import {
    Validator,
    VArrayProperty, VBeforeSave, VGooseTypes, VIndexedProp, VMethodProperty, VProperty, VSchema,
} from "../VGoose";
import {VDBMongoDocument} from "../VDBMongoDocument";

@VSchema()
export class People extends VDBMongoDocument{
    @VProperty({type: String, required: true})
    public name: string;

    @VProperty({type: String, required: true})
    public surname: string;

    @VProperty({type: String, required: true, unique: true})
    @VIndexedProp(1)
    public nickname: string;

    @VProperty({type: String, required: false})
    @VIndexedProp(1)
    public email: string;

    @VProperty({type: Boolean, default: false})
    public isStudent?: boolean;

    @VProperty({type: Boolean, default: false})
    public isWorker?: boolean;

    @VMethodProperty
    public getName(): any {
        return this.name;
    }
}
