import { useWatch } from "react-hook-form";
import type { Control } from "react-hook-form";

type Props = {
  control: Control<any>;
};

const getPasswordStrength = (password: string) => {
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 1) return { label: "Weak", score };
  if (score <= 3) return { label: "Medium", score };
  return { label: "Strong", score };
};

const PasswordStrength = ({ control }: Props) => {
  const password = useWatch({
    control,
    name: "password",
    defaultValue: "",
  });

  if (!password) return null;

  const strength = getPasswordStrength(password);

  return (
    <div className="mt-2">
      <div className="flex gap-1 mb-1">
        {[1, 2, 3, 4].map((level) => (
          <div
            key={level}
            className={`h-1 w-full rounded ${
              strength.score >= level
                ? strength.label === "Weak"
                  ? "bg-red-500"
                  : strength.label === "Medium"
                  ? "bg-yellow-500"
                  : "bg-green-500"
                : "bg-gray-200"
            }`}
          />
        ))}
      </div>

      <p
        className={`text-sm font-medium ${
          strength.label === "Weak"
            ? "text-red-500"
            : strength.label === "Medium"
            ? "text-yellow-600"
            : "text-green-600"
        }`}
      >
        {strength.label}
      </p>
    </div>
  );
};

export default PasswordStrength;
