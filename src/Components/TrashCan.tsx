import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Droppable } from "react-beautiful-dnd";
import { styled } from "styled-components";

const Wrapper = styled.div`
  font-size: 2rem;
  color: white;
  width: 260px;
  text-align: center;
  span {
    font-weight: 400;
    font-size: 0.7rem;
    display: block;
    margin-top: 5px;
  }
`;

const Icon = styled.div<{ isDraggingOver: boolean }>`
  color: ${(props) => (props.isDraggingOver ? "rgb(235, 77, 75)" : "white")};
  transition: color 0.3s ease-in-out;
`;

function TrashCan() {
  return (
    <Wrapper>
      <Droppable droppableId="trash">
        {(provided, snapshot) => (
          <Icon
            isDraggingOver={snapshot.isDraggingOver}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <FontAwesomeIcon icon={faTrash} />
          </Icon>
        )}
      </Droppable>
      <span>일을 쓰레기통으로 드래그하여 삭제</span>
    </Wrapper>
  );
}

export default TrashCan;
