import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('hello');
});

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// ,
//     "start:run": "nodemon build/.js",
//     "start": "concurrently npm:start:*"

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
