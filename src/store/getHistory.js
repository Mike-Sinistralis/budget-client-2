import { createHashHistory } from 'history';
import { useRouterHistory } from 'react-router';

const hashHistory = useRouterHistory(createHashHistory)({ queryKey: false });

export default hashHistory;
