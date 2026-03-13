
type FieldType = "text" | "radio" | "select" | "email" | "password" | "number";

export type FieldProps = {
  label: string
  type: FieldType
  name: string
  options?: string[]
  value?: string
  onChange: (name: string, value: string) => void
}