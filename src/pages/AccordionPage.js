import Accordion from '../components/Accordion';

function AccordionPage() {

  const items = [
    {
      id: 'weropsjd',
      label: 'Can I use React in a project?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos eveniet reiciendis sapiente? A amet asperiores assumenda, aut blanditiis corporis debitis hic libero omnis optio quae quidem soluta veniam voluptates voluptatum!'
    },
    {
      id: 'dskldfj',
      label: 'Can I use JavaScript in a project?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias earum eos esse illum mollitia quam sunt totam veniam. Enim error magnam numquam reprehenderit tenetur? Atque excepturi exercitationem fugiat hic itaque!'
    },
    {
      id: 'vxnvmui',
      label: 'Can I use CSS in a project?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consequatur illo maiores quas veniam. Ab amet corporis eligendi error eveniet id impedit optio quis sapiente, similique sit soluta, veniam voluptas!'
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;