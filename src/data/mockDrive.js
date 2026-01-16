export const mockDrive = {
  root: [
    {
      id: '1',
      name: 'Contratti',
      type: 'folder',
    },
    {
      id: '2',
      name: 'Comunicazioni',
      type: 'folder',
    },
    {
      id: '3',
      name: 'Regolamenti.pdf',
      type: 'file',
    },
  ],

  '1': [
    { id: '4', name: 'CCNL 2024.pdf', type: 'file' },
    { id: '5', name: 'Accordi aziendali', type: 'folder' },
  ],

  '5': [
    { id: '6', name: 'Accordo Milano.pdf', type: 'file' },
  ],
};
