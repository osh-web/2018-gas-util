// @flow

const toChatwork = ({url, name, lastUpdated}) => {
    const formattedLastUpdated = lastUpdated.toLocaleString()
    const body = `[info][title]Googleドライブに更新がありました[/title]ファイル名: ${name}
更新時刻: ${formattedLastUpdated}
${url}[/info]`
    return body;
}

export const updateCheck = ({targetFolderId, militime, consumer}: Object) =>  {
    const fileCheck = (file) => {
        const lastUpdated = file.getLastUpdated();
        if (militime < lastUpdated.getTime()) {
            const url = file.getUrl();
            const name = file.getName();
            const body = toChatwork({ url, name, lastUpdated });
            consumer(body);
        }
    }

    const targetFolder = DriveApp.getFolderById(targetFolderId);
    const folders = targetFolder.getFolders();
    const files = targetFolder.getFiles();

    while (folders.hasNext()) {
        const folder = folders.next();
        const childTargetFolderId = folder.getId();
        updateCheck({
            targetFolderId: childTargetFolderId,
            militime,
            consumer,
        })
    }

    while (files.hasNext()) {
        const file = files.next();
        fileCheck(file)
    }
}
