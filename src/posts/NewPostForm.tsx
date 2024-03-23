import { FieldError, useForm } from "react-hook-form";
import { NewPostData } from "./types";
import { ValidationError } from "./ValidationError";


type Props = {
    onSave: (newPost: NewPostData) => void
}
export function NewPostForm({ onSave }: Props) {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = useForm<NewPostData>()
const fieldStyle = ''
function getEditorStyle(fieldError: FieldError | undefined) {
    return fieldError ? '' : ''
}
return (
    <form noValidate
        className=""
        onSubmit={handleSubmit(onSave)}>
        <div>
            <label>Title</label>
            <input type="text" id="title" {...register('title', {
                required: 'Musisz wpisać tytuł'
            })} />
            <ValidationError fieldError={errors.title} />
        </div>
        <div>
            <label>Opis</label>
            <textarea id="description" {...register('description', {
                required: 'Musisz wpisać treść'
            })} />
            <ValidationError fieldError={errors.description} />
        </div>
        <div>
            <button type="submit" disabled={isSubmitting}>Save</button>
            {isSubmitSuccessful && (<div role="alert">Post zapisany</div>
            )}
        </div>
    </form>
)
        }

