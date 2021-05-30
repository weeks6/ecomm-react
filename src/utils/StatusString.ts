import { Status } from "../store/store";

export default function getStatusString(status: Status) {
  const statusObject = {
    status: -1,
    text: "Неизвестный статус",
  };
  switch (status) {
    case Status.BEING_DELIVERED:
      statusObject.status = Status.BEING_DELIVERED;
      statusObject.text = "Едет к вам";
      break;
    case Status.CANCELED:
      statusObject.status = Status.CANCELED;
      statusObject.text = "Заказ отменён";
      break;
    case Status.CLOSED:
      statusObject.status = Status.CLOSED;
      statusObject.text = "Закрыт";
      break;

    case Status.DELIVERED:
      statusObject.status = Status.DELIVERED;
      statusObject.text = "Доставлен";
      break;
    case Status.IN_PROGRESS:
      statusObject.status = Status.IN_PROGRESS;
      statusObject.text = "Обрабатывается";
      break;
    case Status.PLACED:
      statusObject.status = Status.PLACED;
      statusObject.text = "Ждёт обработки";
      break;
    default:
      break;
  }

  return statusObject;
}
