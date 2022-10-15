import Column from "./column";
import TablePlain from "./plain";

type InternalTable = typeof TablePlain;

interface ExportTable extends InternalTable {
  Column: typeof Column;
}

const Table = TablePlain as ExportTable;
Table.Column = Column;

export { Table };
