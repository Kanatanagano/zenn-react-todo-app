type Props = {
  deleteAllCompleted: () => void;
};
export const TodoSummary = ({ deleteAllCompleted }: Props) => {
  return (
    <div className="flex justify-end">
      <button onClick={deleteAllCompleted} className="text-sm text-red-500">
        delete completed Todo
      </button>
    </div>
  );
};
