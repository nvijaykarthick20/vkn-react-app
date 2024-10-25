import { useEffect, useState } from "react";
import UserModel from "../../models/UserModel";
import { SpinnerLoading } from "../common/SpinnerLoading";
import EventTransactionModel from "../../models/EventTransactionModel";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
export const EventTransaction = () => {

  const [eventTransactions, setEventTransactions] = useState<EventTransactionModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
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
      setHttpError(error.message);
    })

  }, [])

  if (httpError) {
    return (
      <div className='container m-5'>
        <p>{httpError}</p>
      </div>
    )
  }


  return (
    <div className="User">
      <DataTable value={eventTransactions} tableStyle={{ minWidth: '50rem' }}>
        <Column field="eventId" header="Event Id"></Column>
        <Column field="partition" header="Partition"></Column>
        <Column field="requestBody" header="Request Body"></Column>
        <Column field="topic" header="Topic"></Column>
        <Column field="status" header="Status"></Column>
        <Column field="eventDate" header="Event Date"></Column>
        <Column field="exceptionMsg" header="Exception Message"></Column>
      </DataTable>
    </div>
  );
}