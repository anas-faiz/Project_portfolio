import Field from "./component/Field";
import { formSchema } from "./schema/formschema";

export default function App() {
  return (
    <div>
      {formSchema.map((field) => (
        <Field
          key={field.name}
          {...field}
          value={formData[field.name]}
          onChange={handleChange}
        />
      ))}
    </div>
  );
}
