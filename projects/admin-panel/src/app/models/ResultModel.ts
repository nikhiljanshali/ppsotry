import { StatusInfo } from './StatusInfo';

export class ResultModel<T> {
  data!: T;
  errors!: StatusInfo[];
  statusCode!: number;
  totalRowCount!: number;
}
