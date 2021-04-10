import React, { useState } from "react";
import PropTypes from "prop-types";

TodoFrom.propTypes = {
  onSubmit: PropTypes.func,
};

TodoFrom.defaultProps = {
  onSubmit: null,
};

function TodoFrom(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState("");

  const onHandleSubmit = () => [
    onSubmit({
      title: value,
    }),
  ];

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!onSubmit) return;
        onHandleSubmit();
        setValue("");
      }}
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}

export default TodoFrom;
