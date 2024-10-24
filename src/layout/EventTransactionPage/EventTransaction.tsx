import { useEffect, useState } from "react";
import UserModel from "../../models/UserModel";
import { SpinnerLoading } from "../common/SpinnerLoading";
import EventTransactionModel from "../../models/EventTransactionModel";

export const EventTransaction = () => {

const [eventTransactions, setEventTransactions] = useState<EventTransactionModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpErrors, setHttpErrors] = useState();
  const [search, setSearch] = useState('');

  const eventTransactionModel: EventTransactionModel[] = [];

  useEffect(() => {

    if (isLoading) {
      <SpinnerLoading />
    }

    const fetchUsers = async () => {
      setIsLoading(false);
      let transactionUrl: string = `vknevent/v1/eventtransaction`;

      const response = await fetch(transactionUrl);

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseJson = await response.json();

      for (const i in responseJson) {
        const eventtransaction: EventTransactionModel = new EventTransactionModel();
        const responseKey = responseJson[i];
        eventtransaction.eventId = responseKey.eventId;
        eventtransaction.partition = responseKey.partition;
        eventtransaction.requestBody = responseKey.requestBody;
        eventtransaction.topic = responseKey.topic;
        eventtransaction.status = responseKey.status;
        eventtransaction.eventDate = responseKey.eventDate;
        eventtransaction.stackTrace = responseKey.stackTrace;
        eventtransaction.exceptionMsg = responseKey.exceptionMsg;
        eventTransactionModel.push(eventtransaction);
      }
      setEventTransactions(eventTransactionModel);
    }

    fetchUsers().catch((error: any) => {
      setIsLoading(false);
      setHttpErrors(error.message);
    })

  }, [])

  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope='col'>Event Id</th>
            <th scope='col'>Topic</th>
            <th scope='col'>Partition</th>
            <th scope='col'>Status</th>
            <th scope='col'>Event Date</th>
            <th scope='col'>Request body</th>
            <th scope='col'>Exception Message</th>
            <th scope='col'>Stack Trace</th>
          </tr>
        </thead>
        <tbody>
          {eventTransactions.map((trans, i) => (
            <tr key={i}>
              <td>{trans.eventId}</td>
              <td>{trans.topic}</td>
              <td>{trans.partition}</td>
              <td>{trans.status}</td>
              <td>{trans.eventDate}</td>
              <td>{trans.requestBody}</td>
              <td>{trans.exceptionMsg}</td>
              <td>{trans.stackTrace}</td>
            </tr>
          )
          )}
        </tbody>
      </table>
    </div>
  );
}