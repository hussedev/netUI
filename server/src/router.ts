import * as Router from 'koa-router';
import * as nmap from './controllers/nmap';

const router = new Router();

router.get('/', async (ctx, next) => {
  ctx.body = { msg: 'Hey! I am your server, kneel!!!' };

  await next();
});


 router.get('/getAll', nmap.scan);
// router.get('/scanAll/', nmap.scan);
// router.get('/getAll/', nmap.scan);
/**
 *  sets default target,
 *  stores it in targets collection
 *  with 'default' as name
 *  and starts the demon to scan
 *
 *  expects an string with this formats:
 *  '192.168.1.1'
 *  '192.168.1.0/24'
 *  or a comma separated list, with no espaces
 */
// router.post('/setDefault', store.setDefault);

/**
 *  sets group target,
 *  stores it in targets collection
 *  with 'name' property as name
 *  and starts the demon to scan in case
 *  watch is true
 *
 *  expects an object with this format:
 *  {
 *    name: string
 *    target: string
 *    watch: boolean
 *   }
 *  target format:
 *  '192.168.1.1'
 *  '192.168.1.0/24'
 *  or a comma separated list, with no espaces
 *
 */
export default router;