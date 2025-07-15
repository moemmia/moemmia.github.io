import '@react95/core/GlobalStyle';
import '@react95/core/themes/win95.css';

import { TaskBar, List } from '@react95/core';
import { ReaderClosed, WindowsExplorer} from '@react95/icons';


export default function TBar() {
    return (
        <>
            <TaskBar list={<List>
                <List.Item icon={<ReaderClosed variant="32x32_4" />}>
                    Local Disk (C:)
                </List.Item>
                <List.Item icon={<WindowsExplorer variant="32x32_4" />}>
                    Windows Explorer
                </List.Item>
                </List>} />
        </>
    )
}
